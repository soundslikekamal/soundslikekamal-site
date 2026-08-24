import "server-only";
import { Client } from "@notionhq/client";
import type {
  PageObjectResponse,
  QueryDataSourceResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { CardColor, EditingReleaseItem, PortfolioItem, ServiceTag } from "./types";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const PORTFOLIO_DB_ID = process.env.NOTION_PORTFOLIO_DB_ID!;
export const MUSIC_EDITING_DB_ID = process.env.NOTION_MUSIC_EDITING_DB_ID!;

// Notion page/cover "color" -> our pastel card token.
// Notion doesn't expose the page color via the API directly on gallery cards in a
// simple enum we can rely on across accounts, so we derive a stable pastel per item
// from its primary service tag, matching the palette observed on the live site.
function cardColorForServices(services: ServiceTag[]): CardColor {
  if (services.includes("Audio Restoration")) return "pink";
  if (services.includes("Sound Design")) return "blue";
  if (services.includes("Bespoke Music Composition")) return "purple";
  if (services.includes("Production Music") || services.includes("Creative Music Editing"))
    return "peach";
  if (services.includes("Mixing")) return "yellow";
  return "purple";
}

function isFullPage(page: unknown): page is PageObjectResponse {
  return (
    typeof page === "object" &&
    page !== null &&
    "properties" in page &&
    "object" in page &&
    (page as { object: string }).object === "page"
  );
}

function getTitle(page: PageObjectResponse, prop: string): string {
  const p = page.properties[prop];
  if (p?.type === "title") {
    return p.title.map((t) => t.plain_text).join("");
  }
  return "";
}

function getRichText(page: PageObjectResponse, prop: string): string {
  const p = page.properties[prop];
  if (p?.type === "rich_text") {
    return p.rich_text.map((t) => t.plain_text).join("");
  }
  return "";
}

function getMultiSelect(page: PageObjectResponse, prop: string): string[] {
  const p = page.properties[prop];
  if (p?.type === "multi_select") {
    return p.multi_select.map((o) => o.name);
  }
  return [];
}

function getCheckbox(page: PageObjectResponse, prop: string): boolean {
  const p = page.properties[prop];
  if (p?.type === "checkbox") return p.checkbox;
  return false;
}

function getCover(page: PageObjectResponse): string | null {
  if (!page.cover) return null;
  if (page.cover.type === "external") return page.cover.external.url;
  if (page.cover.type === "file") return page.cover.file.url;
  return null;
}

function getUrl(page: PageObjectResponse, prop: string): string {
  const p = page.properties[prop];
  if (p?.type === "url") return p.url ?? "";
  return "";
}

function getSelect(page: PageObjectResponse, prop: string): string {
  const p = page.properties[prop];
  if (p?.type === "select") return p.select?.name ?? "";
  return "";
}

function getFirstFileUrl(page: PageObjectResponse, prop: string): string | null {
  const p = page.properties[prop];
  if (p?.type === "files" && p.files.length > 0) {
    const f = p.files[0];
    if (f.type === "external") return f.external.url;
    if (f.type === "file") return f.file.url;
  }
  return null;
}

function mapEditingRelease(page: PageObjectResponse): EditingReleaseItem {
  return {
    id: page.id,
    title: getTitle(page, "Release Title"),
    catalogue: getSelect(page, "Catalogue"),
    viewAlbumUrl: getUrl(page, "View Album"),
    artwork: getFirstFileUrl(page, "Artwork") ?? getCover(page),
  };
}

function mapPortfolioItem(page: PageObjectResponse): PortfolioItem {
  const services = getMultiSelect(page, "Services") as ServiceTag[];
  return {
    id: page.id,
    name: getTitle(page, "Name"),
    client: getRichText(page, "Client"),
    services,
    featured: getCheckbox(page, "Featured"),
    info: getRichText(page, "Info"),
    date: getRichText(page, "Date") || null,
    credits: getRichText(page, "Credits"),
    coverImage: getCover(page),
    cardColor: cardColorForServices(services),
  };
}

async function queryAllPages(dataSourceId: string): Promise<PageObjectResponse[]> {
  const pages: PageObjectResponse[] = [];
  let cursor: string | undefined;
  do {
    const res: QueryDataSourceResponse = await notion.dataSources.query({
      data_source_id: dataSourceId,
      start_cursor: cursor,
      page_size: 100,
    });
    pages.push(...res.results.filter(isFullPage));
    cursor = res.has_more ? (res.next_cursor ?? undefined) : undefined;
  } while (cursor);
  return pages;
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const pages = await queryAllPages(PORTFOLIO_DB_ID);
  return pages.map(mapPortfolioItem);
}

export async function getFeaturedPortfolioItems(): Promise<PortfolioItem[]> {
  const items = await getPortfolioItems();
  return items.filter((i) => i.featured);
}

export async function getPortfolioItemsByService(
  service: ServiceTag
): Promise<PortfolioItem[]> {
  const items = await getPortfolioItems();
  return items.filter((i) => i.services.includes(service));
}

export async function getEditingReleases(): Promise<EditingReleaseItem[]> {
  const pages = await queryAllPages(MUSIC_EDITING_DB_ID);
  return pages.map(mapEditingRelease);
}
