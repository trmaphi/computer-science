// Credits to https://www.tutorialspoint.com/cprogramming/c_pointer_arithmetic.htm

#include <stdio.h>

const int MAX = 3;

int main()
{

    int var[] = {10, 100, 200};
    int i, *ptr;

    /* Let us have array address in pointer */
    // ptr = var;
    // OR
    ptr = &var[0];
    
    for (i = 0; i < MAX; i++)
    {

        // printf("Address of var[%d] = %x\n", i, ptr);
        printf("Address of var[%d] = %p\n", i, ptr);

        printf("Value of var[%d] = %d\n", i, *ptr);

        /* move to the next location */
        ptr++;
    }

    return 0;
}