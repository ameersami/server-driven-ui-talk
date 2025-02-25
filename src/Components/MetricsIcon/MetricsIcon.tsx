import styles from './MetricsIcon.module.css';

export default ({ type }: { type: 'EXPENSES' | 'INCOME' | 'SALES' | 'PRODUCTS' | 'USERS' | 'ORDERS' | 'SPENT' }) => {
  let icon = (<></>);

  switch (type) {
    case 'SPENT':
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><title>atm-machine-credit-card</title><g fill="#000000" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19L2 19L2 3L46 3L46 19L39 19" stroke="#000000" stroke-width="2" fill="none"></path> <path d="M9 8L9 36C9 38.7614 11.2386 41 14 41L34 41C36.7614 41 39 38.7614 39 36L39 8L9 8Z" stroke="#000000" stroke-width="2" fill="none"></path> <path d="M32 8L32 41" stroke="#000000" stroke-width="2" fill="none"></path> <path d="M26 8L26 41" stroke="#000000" stroke-width="2" fill="none"></path> <path d="M16 10L16 14" stroke="#000000" stroke-width="2" fill="none"></path></g></svg>
      )
      break;
    case 'USERS':
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><title>users-4</title><g fill="#000000" stroke-linecap="round" stroke-linejoin="round"> <path d="M14.72 4.71903C15.8657 3.08966 17.7844 2 20 2C23.9575 2 26.9677 5.47648 26.3171 9.29547L25.659 13.1588C25.3941 14.7134 24.4917 16.0295 23.24 16.8682V17.8524C23.24 18.3608 23.3656 18.8744 23.7619 19.1929C24.8445 20.0633 27.152 21.0125 28.9737 21.6855C30.1792 22.1308 31 23.2645 31 24.5496V26H25.0001" stroke="#000000" stroke-width="2" fill="none"></path> <path d="M8.03 21.6292V22.6358C8.03 23.0359 7.9552 23.4462 7.65773 23.7137C6.78335 24.4999 4.70392 25.3618 3.01479 25.9873C1.81498 26.4316 1 27.5584 1 28.8379V30H21V28.8379C21 27.5584 20.185 26.4316 18.9852 25.9873C17.2961 25.3618 15.2167 24.4999 14.3423 23.7137C14.0448 23.4462 13.97 23.0359 13.97 22.6358V21.6292C15.1174 20.8604 15.9446 19.654 16.1874 18.2289L16.7907 14.6875C17.3871 11.1868 14.6277 8 11 8C7.37233 8 4.6129 11.1868 5.20928 14.6875L5.8126 18.2289C6.05537 19.654 6.8826 20.8604 8.03 21.6292Z" stroke="#000000" stroke-width="2" fill="none"></path> </g></svg>
      );
      break;
    case 'ORDERS':
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><title>layers</title><g fill="#000000" stroke-linecap="round" stroke-linejoin="round"> <path d="M5 16L24 6L43 16L24 26L5 16Z" stroke="#000000" stroke-width="2" fill="none"></path> <path d="M40.6024 22.7382L43 24L24 34L5 24L7.39757 22.7382" stroke="#000000" stroke-width="2" fill="none"></path> <path d="M40.6024 30.7381L43 32L24 42L5 32L7.39757 30.7381" stroke="#000000" stroke-width="2" fill="none"></path> </g></svg>
      );
      break;
    case 'PRODUCTS':
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>box</title><g fill="#000000" stroke-linecap="round" stroke-linejoin="round"><path d="M16.6772 9.16431L12.4461 11.2772C12.1652 11.4175 11.8347 11.4177 11.5536 11.2778L7.32132 9.17072" stroke="#000000" stroke-width="2" fill="none"></path> <path d="M3 11.7935V18L12 22.5L21 18V11.7935" stroke="#000000" stroke-width="2" fill="none"></path> <path d="M21 7.00552L13 11L14 15L22.5 11L21 6L12 1.5L3 6L1.5 11L10 15L11 11L3 7.01921" stroke="#000000" stroke-width="2" fill="none"></path></g></svg>
      );
      break;
    case 'SALES':
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><title>sack</title><g fill="#000000" stroke-linecap="round" stroke-linejoin="round"> <path d="M27 17.5L24 14.5L21 17.5" stroke="#000000" stroke-width="2" fill="none"></path> <path d="M23.9999 45C13.2304 45 5.66663 41.6723 5.66663 32.7102C5.66663 26.1921 11.338 18.0494 18 13.5H29.9999C36.6619 18.0494 42.3333 26.1921 42.3333 32.7102C42.3333 41.6723 34.7695 45 23.9999 45Z" stroke="#000000" stroke-width="2" fill="none"></path> <path d="M18 13.5L13 4.5L18 3L24 8L30.0001 3L35 4.5L30 13.5" stroke="#000000" stroke-width="2" fill="none"></path> <path d="M26.8571 25L23 25C21.3431 25 20 26.3431 20 28V28C20 29.6569 21.3431 31 23 31H25C26.6569 31 28 32.3431 28 34V34C28 35.6569 26.6569 37 25 37H21.1429" stroke="#000000" stroke-width="2" fill="none"></path> <path d="M24 39V37" stroke="#000000" stroke-width="2" fill="none"></path> <path d="M24 25V23" stroke="#000000" stroke-width="2" fill="none"></path> </g></svg>
      );
      break;
    case 'INCOME':
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><title>trend-up</title><g fill="#000000"><path d="M15,4H10a1,1,0,0,0,0,2h2.586L9,9.586,5.707,6.293a1,1,0,0,0-1.414,0l-4,4a1,1,0,0,0,1.414,1.414L5,8.414l3.293,3.293a1,1,0,0,0,1.414,0L14,7.414V10a1,1,0,0,0,2,0V5A1,1,0,0,0,15,4Z" fill="var(--colors_GREEN_400)"></path></g></svg>
      );
      break;
    case 'EXPENSES':
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><title>trend-down</title><g fill="#000000"><path d="M15,5a1,1,0,0,0-1,1V8.586L9.707,4.293a1,1,0,0,0-1.414,0L5,7.586,1.707,4.293A1,1,0,0,0,.293,5.707l4,4a1,1,0,0,0,1.414,0L9,6.414,12.586,10H10a1,1,0,0,0,0,2h5a1,1,0,0,0,1-1V6A1,1,0,0,0,15,5Z" fill="var(--colors_ORANGE_400)"></path></g></svg>
      );
      break;
    default:
      break;
  }

  return (
    <div className={styles.container}>
      {icon}
    </div>
  )
};