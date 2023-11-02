
export default function Pagination({ page, lastPage, setPage }) {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }
    const handleNextPage = () => {
        if (page !== lastPage) {
            setPage((prev) => prev + 1)
            scrollTop()
        }
    }

    const handlePrevPage = () => {
        if (page !== 1) {
            setPage((prev) => prev - 1)
            scrollTop()
        }
    }
    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-brand-primary text-2xl">
            <button className="transition-all hover:text-brand-accent" onClick={handlePrevPage}>Prev</button>
            <p>{page} of {lastPage}</p>
            <button className="transition-all hover:text-brand-accent" onClick={handleNextPage}>Next</button>
        </div>
    )
}
