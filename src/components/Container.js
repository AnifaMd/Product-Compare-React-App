import React from 'react';
import MYResult from '../json/results.json';
import BootstrapTable from 'react-bootstrap-table-next';
import Button from './Button';
import MyModal from './MyModal';
import '../css/mystyles.css'

class Container extends React.Component{

    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.input = React.createRef();
    
        this.state = {
            show: false,
            data: MYResult.Products || [],
            actualData: MYResult.Products || [],
            columns: MYResult.ParametricList_Attributes || [],
            isCompareClicked: false,
            isDisabled: true,
            selected: []
        };
    }

    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
    }

    componentDidMount(){

        const radio = (column, colIndex) => {
            //console.log(colIndex)
            //console.log("column text "+column.text)
            if("Part Number"===column.text || "Product Line"===column.text){
                return (
                    <div>
                        {column.text}  
                        <span><input type="radio" name="parametricfilter" 
                        value={column.text} ref={this.input}
                         onClick={this.handleShow}/></span>
                    </div>
                );
            }else{
                return <div>{column.text}  </div>
            }
        }
        const newColumn = this.state.columns.map((column) => {
            //console.log("column --"+column.text)
                return {...column, headerFormatter: radio};
        });
        //console.log("newColumn --"+newColumn)
        this.setState({columns: newColumn });
    }
    

    onSelectClick = (row, isSelect) => {
        let modifiedRow;
        if (isSelect) {
            console.log("inside if "+this.state.selected)
          modifiedRow = [...this.state.selected, row.PartNumber];
        } else {
            console.log("inside else "+this.state.selected)
          modifiedRow = this.state.selected.filter(s => s !== row.PartNumber);
        }
        //console.log("modifiedRow -- "+modifiedRow)
        this.setState({ isCompareClicked: true, selected: modifiedRow });
        if (modifiedRow.length < 2) {
            this.setState({isDisabled:true})
        }else{
            this.setState({isDisabled:false})
        }
    };

    onButtonClick = () => {
        const data = this.state.data;
        const selectedData = this.state.selected;
        //console.log("selectedData -- "+selectedData)
        let filterredData = data.filter(row =>
            selectedData.includes(row.PartNumber)
        );
        this.setState({ data: filterredData });
    };

    onSelectAll = (isSelect, rows) => {
        //console.log("rows --- "+rows);
        //console.log("isSelect --- "+isSelect);
        let newRows = isSelect ? rows.map(row => row.PartNumber) : [];
        this.setState({ selected: newRows });

        if(isSelect){
            this.setState({ isDisabled:false });
        }else{
            this.setState({ isDisabled:true });
        }
        
    };
    
    onClearClick = () => {
        this.setState(state => ({ data: state.actualData, selected: [], isDisabled: true }));
    };

    render(){
        //console.log(this.state);
        var selectRowProp = {
            mode: "checkbox",
            clickToSelect: true,
            selected: this.state.selected,
            onSelect: this.onSelectClick,
            onSelectAll: this.onSelectAll
        };
        const allPartNumbers = this.state.data.map(partnumbers =>partnumbers.PartNumber);
        var btnstyle ={marginRight:'10px'}
        return (
            
            <div>
                <Button onClick={this.onButtonClick} text="Compare" 
                isDisabled={this.state.isDisabled} style={btnstyle}/> 
                <Button onClick={this.onClearClick} text="Clear" />
                <br />
                <br />
                <BootstrapTable keyField="PartNumber" selectRow={selectRowProp}
                    data={this.state.data} columns={this.state.columns}/> 
                <br />
                <Button variant="primary" onClick={this.handleShow} text="Launch demo modal" />
                <MyModal show={this.state.show} handleClose={this.handleClose} allPartNumbers={allPartNumbers} title="PartNumber"/>
            </div>
        );
    }

}

export default Container;