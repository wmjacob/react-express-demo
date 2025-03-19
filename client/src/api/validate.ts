export interface CardValidateInput {
    cardNumber: string;
}

export interface CardValidateOutput {
    valid: boolean;
    error: boolean;
}

export const POSTCardValidate = async ({ cardNumber }: CardValidateInput): Promise<any> => {
    try {
      const response = await fetch('http://localhost:8080/card/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cardNumber })
      });
      return await response.json();
    } catch (err) {
      console.error(err);
    }
    return { error: true, valid: false };
  };