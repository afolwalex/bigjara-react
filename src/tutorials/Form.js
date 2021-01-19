
const Form = () => {
    return (
        <div class="page-content">
		    
            <div class="form-r">
                <div class="form-holder">
                    <fieldset>
                        <legend>First Name</legend>
                        <input type="text" class="form-contro" id="first-name" name="first-name" placeholder="First Name" required />
                    </fieldset>
                </div>
            </div>
            <div class="form-r form-row-date">
                <div class="form-holder form-holder-2">
                    <label class="special-label">Birth Date:</label>
                    <select name="month" id="month">
                        <option value="MM" disabled selected>MM</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                    </select>
                </div>
            </div>
                                
        </div>
    )
}

export default Form