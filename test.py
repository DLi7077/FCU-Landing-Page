t = """Minimum Balance To Earn Stated APY**	RATE	APY**	Term
$1,000	0.499%	0.50%	1 Year CD"""

t= t.replace('	','_')
t= t.replace('\n','_')
s= t.split('_')

# for i in range (0,len(s)-1,2):
#   print(f'[\"{s[i]}\",\"{s[i+1]}\"],')
print('const headers = [')
for i in range (0,3,4):
  print(f'\"{s[i]}\",\"{s[i+1]}\",\"{s[i+2]}\",\"{s[i+3]}\"')
print('];')

print('const rows = [')
for i in range (4,len(s)-1,4):
  print(f'[\"{s[i]}\",\"{s[i+1]}\",\"{s[i+2]}\",\"{s[i+3]}\"],')

print('];')
