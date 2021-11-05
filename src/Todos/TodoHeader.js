function TodoHeader() {
  return (
    <header>
      <div className='clear'>
        <i id='reset' className='fa fa-refresh'></i>
      </div>
      <p id='date' className='date'>
        Kraunasi...
      </p>
      <img
        className='img-fluid cover-img'
        src='/img/gold.jpg'
        alt='Cover image'
      />
    </header>
  );
}

export default TodoHeader;
