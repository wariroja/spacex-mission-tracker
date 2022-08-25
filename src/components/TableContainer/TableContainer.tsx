import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table'
import { TableBody, TableRow, TableCell, TableHead, TableSortLabel } from '@mui/material';
import FilterBar from '../FilterBar/FilterBar'
interface LaunchesProps {
    launches: [{mission_name?: string; launch_year?: string; details?: string;}];
  }

const TableContainer = ({launches}: LaunchesProps) => {
    const headCells = [
        {id: 'mission_name', label: 'Mission Name'}, 
        {id: 'launch_year', label: 'Year'}, 
        {id: 'details', label: 'Details', disableSorting: true},                 
    ]
    const [filterVal, setFilterVal] = useState('')
    const [order, setOrder] = useState<'asc' | 'desc'>('asc')
    const [orderBy, setOrderBy] = useState("")
    const [filterLaunches, setFilterLaunches] = useState<any>([])
    const [final, setFinal] = useState<any>([])

    useEffect(() => {
        filterVal.length > 0 ? setFinal(filterLaunches) : setFinal(launches)
    }, [filterVal, filterLaunches, launches])

    const handleSortRequest = (cellId: string) => {
        const isAsc = order === "asc"
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(cellId)
    }

    function stableSort(array: [], comparator:any) {

        const stabilizedThis = array?.map((el: {}, index: number) => [el, index]);
        stabilizedThis?.sort((a: any, b:any) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis?.map((el) => el[0]);
    }

    function getComparator(order:string, orderBy:any) {
        return order === 'desc'
            ? (a:any, b:any) => descendingComparator(a, b, orderBy)
            : (a:any, b:any) => -descendingComparator(a, b, orderBy);
    }

    function descendingComparator(a:any, b:any, orderBy: any) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }
    const recordsAfterSorting = () => {
        return stableSort((final), getComparator(order, orderBy))

    }

    const handleSearch = (e: any) => {
        setFilterVal(e.target.value)
        filterNames(filterVal)
     
    }

    const filterNames = (val:string) => {
       setFilterLaunches(launches.filter(launch => 
            launch?.mission_name?.toLowerCase().includes(val.toLowerCase())
         ))
    }

return( 
    <div>
            <FilterBar label="search" value={filterVal} onChange={handleSearch}/>
            <Table sx={{margin: "24px"}} stickyHeader data-testid="table">
                <TableHead >
                    <TableRow >
                    {headCells.map(headCell => (
                        <TableCell key={headCell.id}
                            sortDirection={orderBy === headCell.id ? order : false}>
                                {headCell.disableSorting ? headCell.label :
                                <TableSortLabel
                                    active={orderBy === headCell.id}
                                    onClick={() => { handleSortRequest(headCell.id) }}>
                                    {headCell.label}
                                </TableSortLabel>
                                }
                        </TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {recordsAfterSorting()?.map((launch: any, index:number) => (
                        <TableRow key={index}>
                            <TableCell>{launch.mission_name}</TableCell>
                            <TableCell>{launch.launch_year}</TableCell>
                            <TableCell>{launch.details ? launch.details : <div className="italic" >no details available</div>}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>      
            </Table>
        </div>
    )}

export default TableContainer
