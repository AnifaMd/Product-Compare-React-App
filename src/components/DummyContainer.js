import React from 'react';
import MYResult from '../json/results.json';

class DummyContainer extends React.Component{

    state = {
        anotherData: MYResult.Products || [],
        anotherColumns: MYResult.ParametricList_Attributes || [],
        isCompareClicked: false,
        isDisabled: true,
        selected: []
    };

    render(){

        return (
            <div>
                
                <table className="parametric single  tablesorter-bootstrap table-striped table-bordered">
                    <thead><th>Select</th>{
                        
                        this.state.anotherColumns.map(function(item, key) {
                        return(
                            
                            <th>{item.dataField}<input type="checkbox" name="check" /></th>
                        )
                        
                    })}</thead>
                    <tbody>{this.state.anotherData.map(function(item, key) {
                        
                        return (
                            <tr key = {key}>
                                <td><input type="checkbox" name="check" /></td>
                                <td>{item.PartNumber}</td>
                                <td>{item.ProductName}</td>
                                <td>{item.productline}</td>
                                <td>{item.AV_47_Frequency_GHz}</td>
                                <td>{item.AV_47_NF}</td>
                            </tr>
                            )
                        
                        })}</tbody>
                </table>
            </div>
        );
    }

}

export default DummyContainer;