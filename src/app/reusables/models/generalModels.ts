


export interface HeaderInformation{
    headerText: string,
    showNotificationBell: boolean,
    color?: string,
    fontSize?: string
}

export type CardAction= 'freeze-card' | 'defrost-card' | 'block-card' | 'unblock-card' | 'change-pin' | 'fund-card' | 'withdraw' | 'send-to-bank'
