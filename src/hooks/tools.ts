import { useEffect, useRef, useState } from 'react';
import { Transaction } from '../types/types';


export const validateIP = (ip: string): boolean => {
    const pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return pattern.test(ip);
};



const parseDate = (dateString: string): string => {
    const [day, month, year] = dateString.split('.');
    if (day) null
    return `${month}.${year}`; // Возвращаем в формате MM.YYYY
};


const parseDateToObj = (dateString: string) => {
    const [month, year] = dateString.split('.');
    return new Date(`${year}-${month.padStart(2, '0')}-01`);
};

export function useFilteredTransactions(items: Transaction[]) {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [filtered, setFiltered] = useState(items);

    const prevFiltered = useRef(filtered);

    useEffect(() => {
        const currentDate = new Date();

        const toMonth = currentDate.getMonth() + 1;
        const toYear = currentDate.getFullYear();
        setTo(`${String(toMonth).padStart(2, '0')}.${toYear}`);

        // Вычисляем дату 6 месяцев назад
        currentDate.setMonth(currentDate.getMonth() - 6);
        const fromMonth = currentDate.getMonth() + 1;
        const fromYear = currentDate.getFullYear();
        setFrom(`${String(fromMonth).padStart(2, '0')}.${fromYear}`);
    }, []);

    useEffect(() => {
        const fromDate = from ? parseDateToObj(from) : null;
        const toDate = to ? parseDateToObj(to) : null;

        const filteredItems = items.filter(item => {
            const itemDate = parseDate(item.datetime.split(" ")[0]); 
            const itemDateObj = parseDateToObj(itemDate);

            const isAfterFrom = fromDate ? itemDateObj >= fromDate : true;
            const isBeforeTo = toDate ? itemDateObj <= toDate : true;

            return isAfterFrom && isBeforeTo;
        });

        // Проверка, изменились ли отфильтрованные данные
        if (JSON.stringify(filteredItems) !== JSON.stringify(prevFiltered.current)) {
            setFiltered(filteredItems);
            prevFiltered.current = filteredItems;
        }
    }, [from, to, items]); 

    return { from, setFrom, to, setTo, filtered };
}