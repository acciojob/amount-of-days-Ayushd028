const daysOfAYear = (year)=>{
	if(year%4===0)
	{
		if(year%100===4)
		{
			if(year%400===0)
			{
				return 366;
			}
			else
			{
				return 365;
			}
		}
		else
		{
			return 365;
		}
	}
}