import Topbar from '@/components/Topbar/Topbar';
import WorkSpace from '@/components/WorkSpace/WorkSpace';
import { problems } from '@/utils/problems';
import React from 'react';
import { Problem } from "@/utils/types/problem";
import useHasMounted from '@/hooks/useHasMounted';


type ProblemPageProps = {
  problem: Problem;
};

const ProblemPage:React.FC<ProblemPageProps> = ({ problem }) => {
  const hasMounted = useHasMounted();

	if(!hasMounted) return null;
  return <div>
    <Topbar problemPage />
    <WorkSpace problem={problem} />
  </div>
}
export default ProblemPage;

//fetch the local data
// SSG
// getStaticPaths => it create the dynamic routes

export async function getStaticPaths(){
  const paths = Object.keys(problems).map((key)=>({
    params:{pid:key},
  }));

  return {
    paths,
    fallback:false,
  }
}

//getStaticProps => it fetch the data

export async function getStaticProps({ params }: { params: { pid: string } }) {
	const { pid } = params;
	const problem = problems[pid];

	if (!problem) {
		return {
			notFound: true,
		};
	}
	problem.handlerFunction = problem.handlerFunction.toString();
	return {
		props: {
			problem,
		},
	};
}

