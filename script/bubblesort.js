function Bubble()
{
	c_delay=0;
	for(var i=0;i<array-1;i++)
	{
		for(var j=0;j<array-i-1;j++)
		{
			div_update(divs[j],divs_sizes[j],"yellow");// color update
			if(div_sizes[j]>div_sizes[j+1])
			{
				div_update(divs[j],divs__sizes[j], "red");// color update
				div_update(divs[j+1],div_sizes[j+1], "red");// color update
				var temp=div_sizes[j];
				div_sizes[j]=div_sizes[j+1];
				div_sizes[j+1]=temp;


				div_update(divs[j],div_sizes[j],"red");//height update
				div_update(divs[j+1],div_sizes[j+1], "red");// Height update

			}
			div_update(divs[j],div_sizes[j],"blue");//color update
		}
		div_update(divs[j],div_sizes[j],"green");// color update
	}
	div_update(divs[0],div_sizes[0],"green");// color update
		enable_buttons();
}