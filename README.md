# Delegate Snap

This snap demonstrates how to develop a snap with TypeScript. It is a simple
snap that displays a confirmation dialog when the `hello` JSON-RPC method is
called.

## Notes

- [SITE](https://delegate-contracts-twa-web-snap.vercel.app/)
- [VIDEO](https://youtu.be/3Fn0y-SZOpQ)

## Flow

```
- Authentication via "Metamask Flask";
- Allow "Web Notifications" to receive messages from the backend and send messages to "Metamask snap";
- When creating a "Lan" contract, we send a message that the contract has been created;
- when signing the contract, we ask the user for permission to sign;
- after signing, we send the other party a link to the contract signature;
- after signing by the second party, we send a message to the first party that the second party has signed or rejected;
- if we make changes to the contract, we also send notifications
```
