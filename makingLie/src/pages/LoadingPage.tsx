import LoadingSpinner from "../components/LoadingSpinner";
import MascotCharacter from "../components/MascotCharacter";
import ExcuseTipCard from "../components/ExcuseTipCard";
const LoadingPage = () => {
    return (
      <div className="w-full h-screen bg-gradient-to-b from-violet-50 to-white flex flex-col items-center justify-center gap-12">
        <MascotCharacter size={220} />
        <LoadingSpinner size={64} />
        <ExcuseTipCard />
      </div>
    );
  }
  export default LoadingPage;