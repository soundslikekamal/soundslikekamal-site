import styles from "./MuseumList.module.css";

interface MuseumEntry {
  title: string;
  location: string;
}

const MUSEUM_ENTRIES: MuseumEntry[] = [
  { title: "Landing Craft Tank LCT 7074", location: "The D-Day Story\nPortsmouth, UK" },
  { title: "Second World War Galleries", location: "Imperial War Museum\nLondon, UK" },
  { title: "Al Salam Palace Museum", location: "Kuwait City, Kuwait" },
  { title: "Holocaust Centre North", location: "Huddersfield, UK" },
  { title: "Hearts Of Oak", location: "The Historic Dockyard\nChatham, UK" },
];

export function MuseumList() {
  return (
    <div>
      <div className={styles.arrow} aria-hidden="true">
        ↓
      </div>
      <div className={styles.list}>
        {MUSEUM_ENTRIES.map((entry) => (
          <div key={entry.title} className={styles.entry}>
            <div className={styles.entryTitle}>{entry.title}</div>
            {entry.location.split("\n").map((line) => (
              <div key={line} className={styles.entryLocation}>
                {line}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
