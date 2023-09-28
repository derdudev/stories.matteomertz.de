import {getSortedStoriesData} from "@/utils/stories";
import StoriesList from "@/components/stories-list";
import Layout from "@/components/layout";
import Head from "next/head";

export async function getStaticProps() {
    const allStoriesData = getSortedStoriesData();

    return {
        props: {
            allStoriesData,
        },
    };
}

export default function Home({ allStoriesData }) {
    return (
        <Layout home>
            <Head>
                <title>Schichten & Geschichten</title>
            </Head>
            <p>
                es kommt in den unterwartesten Momenten, dann fliegt ein Gedanke ein, mit dem einzigen Zweck, wieder zu verschwinden. <i>Also halte ich ihn fest.</i>
            </p>
            <p>
                hier schreibe ich von denjenigen, bei denen mir das Festhalten gelungen ist:
            </p>
            <StoriesList allStoriesData={allStoriesData}/>
        </Layout>
    )
}
