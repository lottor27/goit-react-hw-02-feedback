import SignUpForm from './Feedback/feedback';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <SignUpForm title="Upload stats" />
      React homework template feedback
      {/* <Section title="">
        <Statistics
          good={0}
          neutral={0}
          bad={0}
          total={total}
          positivePercentage={percentage}
        />
      </Section> */}
    </div>
  );
};
