import { Button } from '@/components/ui/button'
import { classNames } from '@/utils'
import ReactPaginate from 'react-paginate'

interface PaginationProps {
  pageCount: number
  onPageChange: (page: number) => void
  page: number
  containerClassName?: string
}
export const Pagination = ({
  pageCount = 1,
  onPageChange,
  page,
  containerClassName
}: PaginationProps) => {
  const disablePrev = page === 1
  const disableNext = page === pageCount

  const handlePageChange = ({ selected }: { selected: number }) => {
    onPageChange(selected + 1)
  }

  return (
    <ReactPaginate
      pageClassName="rounded text-gray-700 w-fit h-8 min-w-[32px] flex justify-center items-center"
      pageLinkClassName="p-0.5 rounded"
      activeClassName="bg-primary"
      activeLinkClassName="text-white"
      breakClassName="text-gray-700 list-style-none px-2"
      breakLabel="..."
      pageCount={pageCount}
      onPageChange={handlePageChange}
      marginPagesDisplayed={3}
      pageRangeDisplayed={3}
      forcePage={page - 1}
      containerClassName={classNames(
        'flex gap-1 items-center justify-end py-5 px-3  h-12 grow',
        containerClassName
      )}
      previousLabel={
        <Button disabled={disablePrev} variant="ghost">
          Previous
        </Button>
      }
      nextLabel={
        <Button disabled={disableNext} variant="ghost">
          Next
        </Button>
      }
    />
  )
}
