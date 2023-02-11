import CreatePolicy from '../components/CreatePolicy'
import { useInsurer } from '../hooks/useInsurer';
import Card from '../components/Card';

const Insurer = () => {
  const { formVisible, handleToggleForm } = useInsurer();

  return (
    <div>
      <button className="bg-white text-indigo-500 p-2 rounded-lg hover:bg-indigo-500 hover:text-white"
        onClick={handleToggleForm}
      >
        Create Policy
      </button>
      {
        formVisible
          ?
          (
            <div className="container mx-auto py-5">
              <CreatePolicy />
            </div>
          )
          : null
      }

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4">
          <Card />
        </div>
        <div className="w-full md:w-1/4">
          <Card />
        </div>
        <div className="w-full md:w-1/4">
          <Card />
        </div>
        <div className="w-full md:w-1/4">
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Insurer