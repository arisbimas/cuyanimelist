
export default function Pagination({ page, lastPage, setPage }) {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }
    const handleNextPage = () => {
        setPage((prev) => prev + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((prev) => prev - 1)
        scrollTop()
    }
    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-brand-primary text-2xl">
            {page >= 2 && <button button className="transition-all hover:text-brand-accent" onClick={handlePrevPage}>Prev</button>}
            <p>{page} of {lastPage}</p>
            {page !== lastPage && <button className="transition-all hover:text-brand-accent" onClick={handleNextPage}>Next</button>}
        </div>
    )
}
