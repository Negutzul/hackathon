import ModalT from "./Modal";
import UnitEntry from "./UnitEntry";

function UnitList(props) {
  
    const entries = props.list;
    const apikey = props.apikey;
    const list = entries.map((entry) => {
      return <UnitEntry data={entry} onClickHandler={props.onClickHandler} key={Math.random()}></UnitEntry>
    });
    return (
    <>
      <div id="unit-list" style={ {'display': 'grid'} } >
      {list}
      </div>
    </>
    )
  }

export default UnitList;