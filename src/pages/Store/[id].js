import Discipline from "@/Components/Disciplines/Discipline/Discipline";
import Layout from "@/Components/Layout/Layout";
import { getItemData, getPathsFromId } from "@/lib/utils";

export default function DisciplinePage({ disciplineInfo }) {
    return (
        <Layout>
            <Discipline />
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await getPathsFromId()

    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const id = params.id
    const disciplineInfo = await getItemData(id)
    return {
        props: {
            disciplineInfo: disciplineInfo
        }
    }
}