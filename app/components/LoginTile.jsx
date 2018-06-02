import React from "react";
import styles from './LoginTile.css'
import line from '../assets/svg/line.svg'
import userIcon from '../assets/svg/user.svg'
import pwdIcon from '../assets/svg/lock.svg'

class LoginTile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            uname: 'U201517002',
            pwd: 'lx19970510',
            start: '2018-02-26',
            end: '2018-06-26',
            format: 'ics'
        }
        this.handleChanged = this.handleChanged.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChanged(event) {
        event.preventDefault()
        const partialState = {}
        const id = event.target.id
        partialState[id] = event.target.value
        this.setState(partialState)
    }
    handleClick(format) {
        const partialState = {}
        partialState['format'] = format
        this.setState(partialState)
    }

    handleSubmit(event) {
        event.preventDefault()
        const url = 'http://127.0.0.1:3000/course'
        const fd = new Array()
        for (var k in this.state) {
            fd.push(`${encodeURIComponent(k)}=${encodeURIComponent(this.state[k])}`)
        }

        fetch(`${url}/${this.state.format}`, {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Access-Control-Allow-Headers': 'Content-Type',
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }),
            body: fd.join('&')
        })
            .then(res => {
                if (res.ok) {
                    return res.text()
                } else {

                }
            })
            .then(txt => {
                console.log(txt)
            })
            .catch(err => {
                alert(err.toString())
            })
    }

    render() {
        const unameReg = '[UMD]20[12]{1}\\d{6}'
        const dateReg = '((((19|20)\\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\\d|3[01]))|(((19|20)\\d{2})-(0?[469]|11)-(0?[1-9]|[12]\\d|30))|(((19|20)\\d{2})-0?2-(0?[1-9]|1\\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-(0?[1-9]|[12]\\d)))$'
        return (
            < div className={styles.tile} >
                <div className={styles.title}>课表日程</div>
                <img src={line} className={styles.line} />
                <form ref='form' className={styles.table}
                    onSubmit={this.handleSubmit}
                >

                    <div className={styles.item}>
                        <img src={userIcon} className={styles.icon} />
                        <input required type="text" id="uname" value={this.state.unam}
                            className={styles.text}
                            pattern={unameReg}
                            placeholder='学号'
                            onChange={this.handleChanged}
                        />
                    </div>

                    <div className={styles.item}>
                        <img src={pwdIcon} className={styles.icon} />
                        <input required type="password" id="pwd" value={this.state.pwd}
                            className={styles.text}
                            pattern='.{6,}'
                            placeholder='密码'
                            onChange={this.handleChanged}
                        />
                    </div>

                    <div className={styles.item}>
                        <input required type="date" id="start" value={this.state.start}
                            className={styles.date}
                            pattern={dateReg}
                            placeholder='开始日期，yyyy-MM-dd'
                            onChange={this.handleChanged}
                        />
                        <div> &#12288;</div>
                        <input required type="date" id="end" value={this.state.end}
                            className={styles.date}
                            pattern={dateReg}
                            placeholder='结束日期，yyyy-MM-dd'
                            onChange={this.handleChanged}
                        />
                    </div>

                    <div className={styles.sublayout}>
                        <button value="ics" className={styles.submit}
                            onClick={this.handleClick.bind(this, 'ics')}>
                            <span>ICS</span>
                        </button>
                        <button value="csv" className={styles.submit}
                            onClick={this.handleClick.bind(this, 'csv')}>
                            <span>CSV</span>
                        </button>
                    </div>
                </form>

            </div>
        )
    }
}

export default LoginTile