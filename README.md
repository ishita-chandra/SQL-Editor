# SQL Editor using React

The site is hosted on: [https://sql-editor-ishita.netlify.app/](https://sql-editor-ishita.netlify.app/) ✨

This web app is front-end of an SQL editor which can be used to execute the SQL queries.
It consists of an Editor and a Terminal. Some predefined queries that can be executed are provided in the buttons.
#### The website is responsive.


There are 2 buttons : 
- Run button : It executes the query.
- Save button : It prints the webpage.

This is how the website looks:

![SQL Editor website](/public/site1.png 'Website Image 1')
![SQL Editor website](/public/site2.png 'Website Image 2')


The data of the table used is taken from [here](https://github.com/graphql-compose/graphql-compose-examples/blob/master/examples/northwind/data/csv/regions.csv):

### Regions

| Region ID | Region Description |
| :-------: | :----------------: |
|     1     |      Eastern       |
|     2     |      Western       |
|     3     |      Northern      |
|     4     |      Southern      |

The lighthouse report of the hosted website is as follows:
![Report by Lighthouse](/public/report.png 'Report')

### Page Load Time :

The page load time as calculated by tools.pingdom.com was 499ms. I did not use png files and rather switched to svgs to reduce the page load time.
I refactored the code to reduce the file size. Decreasing the files' sizes also makes it easier to combine them. The result is cleaner code, and leaner web pages that load faster.

The full report made by tools.pingdom.com can be accessed [here](https://tools.pingdom.com/#60339a5ac0800000).
