import { connect } from "react-redux";
import NewItemForm from "../components/NewItemForm";
import { addNewItem } from "../store/items/actions";
// import { bindActionCreators } from "redux";

// === too tedius,,, dispatch will be provided just use object ===
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         onSubmit: (name, price) => addNewItem(name, price)
//     }, dispatch);
// }

const mapDispatchToProps = {
    onSubmit: (name, price) => addNewItem(name, price)
};

export const NewItemFormContainer = connect(null, mapDispatchToProps)(NewItemForm);