const Spinner: React.FC = () => (
    <div className="fixed w-full inset-0 bg-white/80 dark:bg-ink/80 flex items-center justify-center z-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 dark:border-neutral-600 dark:border-t-neutral-200 border-solid border-opacity-70"></div>
    </div>
)

export default Spinner
