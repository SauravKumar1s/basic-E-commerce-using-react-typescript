const AddGroceryForm = () => {
  return (
    <form className='add-form'>
      <fieldset>
        <legend>Add Grocery</legend>

        <input type='text' placeholder='Enter Grocery' />

        <input type='submit' value='Add Grocery' />
      </fieldset>
    </form>
  );
};

export default AddGroceryForm;
