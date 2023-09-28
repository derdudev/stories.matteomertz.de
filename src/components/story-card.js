import styles from "./story-card.module.css";
import utilStyles from "../utils/utils.module.css";
import Link from "next/link";

export default function StoryCard({ id, title }) {
    return <div className={styles.container}>
        <Link className={[styles.title, utilStyles.link].join(" ")} href={"/"+id}>{title}</Link>
    </div>
}