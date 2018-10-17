n = int(input('nxn square, n = '))
counter = 0
minClicks = n**2
record = []
numSolutions = 0
avgClicks=0
lastPercent = 0
while counter < 2**n:
    A = []
    firstRow = []
    clicks = 0
    for x in range(n):
        firstRow.append((counter%(2**(x+1))-counter%(2**(x)))/(2**(x)))
    for y in range(n):
        row=[]
        for x in range(n):
            row.append(True)
        A.append(row)
    for c in range(n):
        if firstRow[c]==1:
            A[0][c]= not (A[0][c])
            A[1][c]= not (A[1][c])
            if c!=0:
                A[0][c-1]= not (A[0][c-1])
            if c!=n-1:
                A[0][c+1]= not (A[0][c+1])
            clicks+=1
    for y in range(1,n):
        for x in range(n):
            if A[y-1][x]:
                A[y][x]= not A[y][x]
                A[y-1][x]= not A[y-1][x]
                if y!=(n-1):
                    A[y+1][x]= not A[y+1][x]
                if x!=0:
                    A[y][x-1]= not A[y][x-1]
                if x!=n-1:
                    A[y][x+1]= not A[y][x+1]
                clicks+=1
    hasFailed = False
    for x in range(n):
        if A[n-1][x]:
            hasFailed=True
    if not hasFailed:
        solution = ''
        solution += str(counter) + ': '
        for x in range(n):
            if firstRow[x]==0:
                solution+='□'
            else:
                solution+='■'
        numSolutions += 1
        avgClicks=(avgClicks*(numSolutions-1)+clicks)/numSolutions
        if clicks < minClicks:
            record = []
            record.append(solution)
            minClicks = clicks
    counter+=1
    if counter*100/(2**n) > lastPercent:
        lastPercent=int(counter*100/(2**n)-counter*100/(2**n)%1+1)
        print(str(lastPercent)+'%')
for x in range(100):
    print()
if numSolutions > 1:
    print(str(numSolutions)+' solutions found')
    print('Average number of clicks: '+str(round(avgClicks)))
    print('Most efficient solution:')
    print(record[0]+': '+str(minClicks)+' clicks.')
else:
    print('One solution found:')
    print(record[0]+': '+str(minClicks)+' clicks.')
