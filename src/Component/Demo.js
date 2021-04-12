import React, { Component } from 'react'

export default class Demo extends Component {
    render() {
        return (
            <div class="container">
                <br/><p>Click all the fruits that you like</p>
                <div class="btn-group col-xs-12" data-toggle="buttons">
                    <label class="btn btn-default">
                        <input type="checkbox" name="fruit" id="apple" value="apple"/>apple
                    </label>
                    <label class="btn btn-default">
                        <input type="checkbox" name="fruit" id="pear" value="pear"/>pear
                    </label>
                    <label class="btn btn-default">
                        <input type="checkbox" name="fruit" id="orange" value="orange"/>orange
                    </label>
                </div>

                <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off"/>
                <label class="btn btn-outline-primary" for="btn-check-outlined">Single toggle</label><br/>

                <input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked autocomplete="off"/>
                <label class="btn btn-outline-secondary" for="btn-check-2-outlined">Checked</label><br/>

                <div >

                <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" value="One" autocomplete="off" onChange={(e)=>{console.log(e);alert(e.target.value)}}/>
                <label class="btn btn-outline-success" for="success-outlined">one</label>

                <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" value="Two" autocomplete="off" onChange={(e)=>{alert(e.target.value)}}/>
                <label class="btn btn-outline-secondary" for="danger-outlined">two</label>
                </div>

            </div>
        )
    }
}
