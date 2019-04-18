import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './index.scss'
import Test from '@components/Test'
import { hot } from 'react-hot-loader'
const App = () => {
    ReactDOM.render(
        <div className={styles.hello}>
            hellsssdfdso react-tsn
            {/* <div>111ddd</div> */}
            <div className={styles.a} />
            <Test />
        </div>,

        document.querySelector('#app')
    )
}

App()
//热更新监控·
export default hot(module)(App)
