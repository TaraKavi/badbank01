function Balance(){
    const ctx = React.useContext(UserContext);
    return(
        <h1>Balance 23<br/>
            {JSON.stringify(ctx)}
        </h1>
    );
  }