import Head from "next/head";
import Layout from "@/components/layout";
import {getAllStoryIds, getStoryData} from "@/utils/stories";

import styles from "./[id].module.css";
import Link from "next/link";


export async function getStaticProps({ params }) {
    const storyData = await getStoryData(params.id);
    return {
        props: {
            storyData,
        },
    };
}
export async function getStaticPaths() {
    const paths = getAllStoryIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Story({ storyData }) {
    return (
        <Layout>
            <Head>
                <title>{storyData.title}</title>
            </Head>
            <article>
                <h1>{storyData.title}</h1>
                <div className={styles.storyContent} dangerouslySetInnerHTML={{ __html: storyData.contentHtml }} />
            </article>
        </Layout>
    );
}