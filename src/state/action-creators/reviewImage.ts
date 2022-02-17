export const APPROVE_IMAGE = 'NETWORK/APPROVE_IMAGE';
export const DENY_IMAGE = 'NETWORK/DENY_IMAGE';

export type ApproveImageAction = {
  type: typeof APPROVE_IMAGE;
  payload: string;
};

export type DenyImageAction = {
  type: typeof DENY_IMAGE;
  payload: string;
};

export const approveImage = (url: string) => {
  return {
    type: APPROVE_IMAGE,
    payload: url,
  };
};

export const denyImage = (id: string) => {
  return {
    type: DENY_IMAGE,
    payload: id,
  };
};
