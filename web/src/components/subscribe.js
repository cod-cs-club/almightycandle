/** @jsx jsx */
import { useRef, useState } from 'react';
import { jsx } from 'theme-ui';
import { Flex, Button, Input } from 'theme-ui';

export default function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a status in state to handle the response from our API.
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const handleMailChimpResponse = (errorMsg, successMsg) => {
    if (errorMsg) {
      // 4. If there was an error, update the message in state.
      setStatus({
        info: { error: true, msg: errorMsg },
      });

      return;
    }

    // 5. Clear the input value and show a success message.
    setStatus({
      submitted: true,
      submitting: false,
      info: { error: false, msg: successMsg },
    });
    inputEl.current.value = '';
  };

  const handleSendGridResponse = (status, msg) => {
    if (status === 200) {
      // 5. Clear the input value and show a success message.
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      inputEl.current.value = '';
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const subscribe = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    //for mailChimp integration
    const { error } = await res.json();
    handleMailChimpResponse(
      error,
      'Success! 🎉 You are now subscribed to the newsletter.'
    );
    // For sendGrid integration
    const text = await res.text();
    handleSendGridResponse(res.status, text);
  };
  return (
    <div className="subscribe__area">
      <form onSubmit={subscribe}>
        <Flex sx={styles.subscribeForm}>
          <label htmlFor="email" sx={{ variant: 'styles.srOnly' }}>
            Email Address
          </label>
          <Input
            ref={inputEl}
            id="stock-symbol"
            name="stock-symbol"
            type="text"
            placeholder="Enter Stock Symbol"
          />

          <div>
            {status.info.error && (
              <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
              <div className="success">{status.info.msg}</div>
            )}
          </div>
          <Button
            type="submit"
            disabled={status.submitting}
            variant="subscribeButton"
          >
            {!status.submitting
              ? !status.submitted
                ? 'Predict'
                : 'Submitted'
              : 'Submitting...'}
          </Button>
        </Flex>
      </form>
    </div>
  );
}

const styles = {
  subscribeForm: {
    width: '100%',
    mx: 'auto',
    '[type="email"]': {
      border: '1px solid #D4DAE2',
      borderRadius: '7px',
      fontFamily: 'body',
      fontSize: [1, 2, 3],
      fontWeight: 'body',
      color: 'heading',
      py: 1,
      px: [3, 5],
      backgroundColor: 'transparent',
      transition: 'all 0.25s',
      height: ['50px', '60px'],
      '&:focus': {
        boxShadow: '0 0 0 0px',
        borderColor: 'primary',
      },
      '::placeholder': {
        color: '#9A9CB2',
        opacity: 1,
      },
    },
  },
};
