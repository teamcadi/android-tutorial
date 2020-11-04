## AlertDialog 개념 정리 및 사용법


### alertDialog
&nbsp; 대화 상자를 말하는데 어떤 앱을 실행 시 경고 메세지나 특정한 정보를 알려주기 위한 다이얼로그를 말한다.  

&nbsp; handler를 이용해 특정한 시간이 지났을 때, 특정한 버튼을 눌렀을 때 구현하는 기능이다.


<img src="https://user-images.githubusercontent.com/40445477/98068797-6f8c5300-1ea0-11eb-87c9-8ab68f74d1e3.png"  width="250" height="370">

이와 같이 확인 버튼을 눌러서 어플을 사용하는데 제약을 걸거나 이벤트를 발생하게 한다.

</br></br>

alertDialog는 보통은 확인과 취소버튼으로 이루어져있고 자신이 원하는 형태로 속성을 추가한 Dialog를 만들 수 있다

</br></br>

AlertDialog builder <----> alertDialog의 관계
</br>

builder : 대화상자안에 있는 속성을 정의한다(title이나 버튼 눌렀을 때 나타나는 속성들을 가르킴)

alertDialog : create()함수를 통해 builder에게 전달받아서 생성을 하고 구현하는 로직이다

builder로 정의한 후  msgDlg로 AlertDialog를 만들어 사용한다!!

</br></br>

xml : Listview 추가

<img src="https://user-images.githubusercontent.com/40445477/98071564-41f6d800-1ea7-11eb-94d0-ff00c0d25624.PNG"  width="250" height="370">

</br></br>


AlertDialog의 Builder를 통해 set으로 원하는 속성값들을 추가한 후 create()하여 show()한다.
```java
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button btn_quit = (Button)findViewById(R.id.btn_quit);
        btn_quit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                AlertDialog.Builder msgBuilder = new AlertDialog.Builder(MainActivity.this)
                        .setTitle("어플 종료") //title setting
                        .setMessage("어플 종료??!") //
                        .setPositiveButton("끈다", new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialogInterface, int i) {
                                finish();
                            }
                        })
                        .setNegativeButton("안끈다", new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialogInterface, int i) {
                                Toast.makeText(getApplicationContext(),"안끌래",Toast.LENGTH_LONG).show();
                            }
                        }); // 띄우고자 하는 다이얼로그 속성을 지정해주는 것을 마무리한다
                AlertDialog msgDlg = msgBuilder.create(); //속성을 지정한 msgBuilder 객체를 바탕으로 AlertDialog가 생성됨
                msgDlg.show();
            }
        });

    }

```

</br></br>

---------------------------------------------------
</br></br>

##  ArrayList를 통한 ListView 기초 다지기 및 개념 정리

### ListView & Arrayadapter

리스트 뷰는 해당 뷰들을 리스트 형태로 나열하는 방법을 말한다.

ArrayList로 list를 만든 후 Adapter에게 list값들을 전달하여 ListView에 전달한다. 즉 Adapter는 매개체 역할을 한다.

Data -----> Adapter <---- ListView -->(xml)

</br></br>

아래의 그림은 4가지의 List를 만든후 ListView가 클릭됬을 때 해당 position에 따라 출력되는 화면이다.


<img src="https://user-images.githubusercontent.com/40445477/98071406-cbf27100-1ea6-11eb-8e3a-9beb22a5335f.PNG"  width="250" height="370">

</br>

ArrayList를 활용한 Listview 
```java
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_list_view);

        final TextView  tv_select = (TextView)findViewById(R.id.tv_select);
         final ListView listView = (ListView)findViewById(R.id.listView);

         final List<String> list = new ArrayList<>();
        list.add("사과");
        list.add("배");
        list.add("딸기");
        list.add("감자");

        //adapter list관계
        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1,list);
        listView.setAdapter(adapter);

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int position, long l) {
                String name = (String) listView.getItemAtPosition(position); //listView안에 있는 position에 위치한 값을 가져옴
                tv_select.setText("항목 선택 결과는 "+name+"입니다!!");
                //position 값 : 각각의 항목 위치
            }
        });
    }
```

</br></br>

---------------------------------------------------
</br></br>

## Lombok 기능 및 사용법

### 룸복(Lombok)

룸복(Lombok)이란 자바에서 model object를 만들때 멤버필드에 대한 Getter,Setter,ToString등 과 같이  

불필요하게 반복적으로 만드는 코드를 어노테이션화하여 간결화시키는 라이브러리이다. 

</br></br>

아래의 코드를 보면 쉽게 알 수 있다. Model.class는 getter,setter,toString 함수를 직접 구현하고 있다.  

하지만 어노테이션을 사용했을 때의 변화를 살펴보자.
</br>

</br>

Model.class

```java
public class Model{
 	private String id;
    private String modelId;
    private String name;
      public String getId() {
            return id;
      }
      
      public void setId(String id) {
            this.id = id;
      }
      
      public String getModelId() {
            return modelId;
      }
      
      public void setModelId(String modelId) {
            this.modelId = modelId;
      }
      
      public String getName() {
            return name;
      }
      
      public void setName(String name) {
            this.name = name;
      }
      
      @Override
       public String toString() {
            return "id + modelId+ name";
      }


}
```

</br></br>

@어노테이션을 사용해 간결하게 한다.

```java
@Getter
@Setter
@ToString
public class Model{
	private String id;
    private String modelId;
    private String name;
}
```
</br></br>


아래와 같이 @Data로 변경하여 더 간결하게 사용!

```java
@Data
public class Model{
	private String id;
    private String modelId;
    private String name;
}

```

</br></br>

---------------------------------------------------
</br></br>


## Junit 기능 및 사용법

### Junit

Junit이란 자바 프로그래밍 언어용 테스팅 프레임워크이다.

</br>


- assert메소드로 테스트케이스의 수행결과를 판별한다

- 어노테이션을 제공한다(@Test,@Before,@After)

</br></br>


@Test 

- @Test가 선언되면 테스트를 수행하는 메소드가 된다. (각자 테스트는 영향을 주지 않고 독립적으로 실행한다)

```java
@Test
public class Test{
}
```

</br></br>

@Before

- @Before가 선언되면 Test메소드 전에 반드시 실행된다.

</br>

(자바 static처럼 실행하기전 공통으로 사용할 코드를 미리 선언하는 개념 )

```java
@Before
class Before{
//Test전에 실행 됨
}
```

</br></br>

@After

-@Test실행 된 후에 실행된다.

```java
@After
class After{
//Test한 후에 실행 됨
}
```