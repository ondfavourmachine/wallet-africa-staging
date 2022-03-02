


export interface HeaderInformation{
    headerText: string,
    showNotificationBell: boolean
}

export type CardAction= 'freeze-card' | 'defrost-card' | 'block-card' | 'unblock-card' | 'change-pin' | 'fund-card' | 'withdraw' | 'send-to-bank'