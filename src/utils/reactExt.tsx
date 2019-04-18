import * as React from 'react'

import { message, notification } from 'antd'

export class ComponentExt<P = {}, S = {}> extends React.Component<P, S> {
    $message = message
    $notification = notification
}
