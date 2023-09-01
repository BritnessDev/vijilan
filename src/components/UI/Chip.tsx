interface IChip {
    Label: React.ReactNode;
    onClickHandler: () => void;
}

export const Chip: React.FC<IChip> = (props) => (
    <></>
    // <Chip
    // className="p-4 font-inter font-medium text-sm"
    // label={!filters ? "Open Filters" : "Close Filters"}
    // variant="filled"
    // icon={!filters ? <FilterListIcon /> : <FilterListIcon className='rotate-180' style={{color: '#4880FF'}} />}
    // size="small"
    // style={!filters ? { background: '#DEECFF' } : { background: '#DEECFF', color: '#4880FF', border: '1px', borderStyle: 'solid', borderColor: '#4880FF'}}
    // onClick={()=>setFilters(!filters)}
    // />
);
