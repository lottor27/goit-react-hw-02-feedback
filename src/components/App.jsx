import FeedBack from './Feedback/feedback';
import changeState from './Feedback/onleavefeedback'



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
      
      <div>
      <FeedBack title="Upload stats" />
    </div>
    </div>
    )
};

