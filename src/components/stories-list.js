import StoryCard from "@/components/story-card";

export default function StoriesList({ allStoriesData }){
    return <div>
        {allStoriesData.map(({ id, date, title }) => (
            <StoryCard title={title} id={id} key={id}></StoryCard>
        ))}
    </div>
}