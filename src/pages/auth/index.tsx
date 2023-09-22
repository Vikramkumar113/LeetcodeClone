
import { authModalState } from "@/atoms/authModalAtom";
import AuthModal from "@/components/Models/AuthModal";
import Navbar from "@/components/Navbar/Navbar";
import {useRecoilValue} from "recoil";
import Image from "next/image"
type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
	const authModal = useRecoilValue(authModalState);

	return (
		<div className='bg-gradient-to-b from-gray-600 to-black h-screen relative flex flex-col items-center justify-center'>
				<Navbar />
				<div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
							<Image src="/hero.png" alt="" width={700} height={700} />
				</div>
				{authModal.isOpen && <AuthModal/>}
		</div>
	);
};
export default AuthPage;
