const Spinner: React.FC = () => (
    <div className="fixed w-full inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid border-opacity-70"></div>
    </div>
)

export default Spinner
