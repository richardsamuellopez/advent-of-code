import java.io.*;

public class aocP1 {
  public static String inputFile = "input.txt";
  public static void main(String[] args) throws IOException {
    System.out.println("Read input file");
    FileReader fileReader = new FileReader(inputFile);

    // Always wrap FileReader in BufferedReader.
    BufferedReader bufferedReader = new BufferedReader(fileReader);

    int numberArray[] = new int[200];
    String line = null;
    int index = 0;
    while((line = bufferedReader.readLine()) != null) {
      // System.out.println("input file: " + line);
      numberArray[index] = Integer.parseInt(line);
      index++;
    }

    // Always close files.
    bufferedReader.close();

    for(int x=0;x<numberArray.length;x++){
      for(int y=0;y<numberArray.length;y++){
        for(int z=0;z<numberArray.length;z++){
          if(numberArray[x]+numberArray[y]+numberArray[z]==2020){
              System.out.println("TRIO FOUND: " + numberArray[x] + " + " + numberArray[y] +" + " + numberArray[z] + " = 2020");
              System.out.println("ANSWER: " + numberArray[x] + " * " + numberArray[y] + " * " + numberArray[z] +" = " + numberArray[x] * numberArray[y] * numberArray[z]);
              return;
          }
        }
      }
    }
  }
}
