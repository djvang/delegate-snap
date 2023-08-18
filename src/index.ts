import { OnRpcRequestHandler } from '@metamask/snaps-types';
import { panel, text } from '@metamask/snaps-ui';

/**
 * Handle incoming JSON-RPC requests, sent through `wallet_invokeSnap`.
 *
 * @param args - The request handler args as object.
 * @param args.origin - The origin of the request, e.g., the website that
 * invoked the snap.
 * @param args.request - A validated JSON-RPC request object.
 * @returns The result of `snap_dialog`.
 * @throws If the request method is not valid for this snap.
 */
export const onRpcRequest: OnRpcRequestHandler = async ({
  origin,
  request,
}) => {
  const { title, body } = request.params as { title: string; body: string };

  switch (request.method) {
    case 'hello':
      return await snap.request({
        method: 'snap_dialog',
        params: {
          type: 'alert',
          content: panel([text(`Hello, ${origin}!`)]),
        },
      });
    case 'notification':
      return await snap.request({
        method: 'snap_dialog',
        params: {
          type: 'alert',
          content: panel([text(title), text(body)]),
        },
      });
    case 'sign':
    case 'revoke':
    case 'decline':
    case 'change':
    case 'confirm':
    case 'notice':
      const result = await snap.request({
        method: 'snap_dialog',
        params: {
          type: 'confirmation',
          content: panel([text(title), text(body)]),
        },
      });

      return result;

    default:
      throw new Error('Method not found.');
  }
};
