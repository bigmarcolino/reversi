# 3,4; 4,3 => 1
# 4,4; 3,3 => 2
'''
l = []
for i in range(8):
	for j in range(8):
		sb = [i,j]
		if (i == 3 and j == 4):
			sb += [2]
		elif (i == 4 and j == 3):
			sb += [2]
		elif (i == 4 and j == 4):
			sb += [1]
		elif (i == 3 and j == 3):
			sb += [1]
		else:
			sb += [0]
		l += [sb]

print l'''

out = ""
for i in range(8):
	for j in range(8):
		out += "jogada("+str(i)+", "+str(j)+").\n"
		
print out
