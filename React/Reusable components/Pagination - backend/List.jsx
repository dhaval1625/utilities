import { useEffect, useState } from 'react';
import Pagination from './Pagination';

function List() {
   const [activePage, setActivePage] = useState(1);
   const [totalPages, setTotalPages] = useState(1);

   let condition = false; // condition if list for active page should be fetched or not

   useEffect(() => {
      if (!condition) getList();
   }, [activePage]);

   function getList() {
      // fetch data
   }

   function pageChangeHandler(payload) {
      // payload can be 'prev' | 'next' | number

      if (activePage === 1 && payload === 'prev') return;
      if (activePage === totalPages && payload === 'next') return;
      if (payload === 'next') {
         setActivePage(prev => prev + 1);
      } else if (payload === 'prev') {
         setActivePage(prev => prev - 1);
      } else {
         if (payload === activePage) return;
         setActivePage(payload);
      }
   }

   return (
      <div>
         <Pagination totalPages={totalPages} activePage={activePage} onPageChange={pageChangeHandler} />
      </div>
   );
}
export default List;
