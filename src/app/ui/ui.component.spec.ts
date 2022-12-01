import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from './ui.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { addition } from '../addition/addition';
import { substraction } from '../substraction/substraction';
import { multiplication } from '../multiplication/multiplication';
import { exp } from '../exp/exp';
import { division } from '../division/division';
import { sqr } from '../sqr/sqr';
import { sqrt } from '../sqrt/sqrt';

//Suma---------------------------------------------
describe('Ui Addition - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call addition method', () => {

    // Arrange
    let result = 0;

    // Act
    result = addition(2, 2);

    // Assert
    expect(result).toBe(4);
  })



  it('Should set operator1 model through ngModel', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(3.1416);
  });

  it('Should set operator2 model through ngModel', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator2).toEqual(2.71);
  });


  it('should add operator1 and operator2 when i click the addition button ', () => {
    // Arrange 
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let substractionButton = fixture.debugElement.query(By.css('.addition-button'));

    // Act
    substractionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(7.5);

  });

  it('Should render sum in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;

    // Act
    component.addition();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('10');

  });

});
//Suma------------------------

//Resta------------------------
describe('Ui Substraction - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call substraction method', () => {

    // Arrange
    let result = 0;

    // Act
    result = substraction(0, 2);

    // Assert
    expect(result).toBe(-2);
  })



  it('should substract operator1 and operator2 when i click the substraction button ', () => {
    // Arrange
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let substractionButton = fixture.debugElement.query(By.css('.substraction-button'));

    // Act
    substractionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(2.5);

  });

  it('Should render substraction in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;

    // Act
    component.substraction();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('0');

  });

});
//Resta-------------------------------------------------

//Multiplicacion----------------------------------------
describe('Ui multiplication - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call multiplication method', () => {

    // Arrange
    let result = 0;

    // Act
    result = multiplication(5, 2);

    // Assert
    expect(result).toBe(10);
  })

  it('Should set operator1 model through ngModel', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(3.1416);
  });

  it('Should set operator2 model through ngModel', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator2).toEqual(2.71);
  });


  it('should multiply operator1 and operator2 when i click the multiplication button ', () => {
    // Arrange
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let multiplicationButton = fixture.debugElement.query(By.css('.multiplication-button'));

    // Act
    multiplicationButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(12.5);

  });

  it('Should render multiplication in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;

    // Act
    component.multiplication();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('25');

  });

});

//Multiplicacion----------------------------------------------

//Division----------------------------------------------------
describe('Ui Division - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call Division method', () => {
    // Arrange
    let result = 0;

    // Act
    result = division(2, 2);

    // Assert
    expect(result).toBe(1);
  })

  it('Should set operator1 model through ngModel', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(3.1416);
  });

  it('Should set operator2 model through ngModel', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator2).toEqual(2.71);
  });

  it('should division operator1 and operator2 when i click the division button ', () => {
    // Arrange
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let divisionButton = fixture.debugElement.query(By.css('.division-button'));

    // Act
    divisionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(2);

  });

  it('Should render division in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;

    // Act
    component.division();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('1');

  });

});

//Division-----------------------------------------

//exp--------------------------------------------------
describe('Ui exp - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call exp method', () => {
    // Arrange
    let result = 0;

    // Act
    result = exp(3, 3);

    // Assert
    expect(result).toBe(27);
  })

  it('Should set operator1 model through ngModel', async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.operator1).toEqual(3.1416);
  });

  it('Should set operator2 model through ngModel', async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.operator2).toEqual(2.71);
  });


  it('should exp operator1 and operator2 when i click the exp button ', () => {
    // Arrange
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let expButton = fixture.debugElement.query(By.css('.exp-button'));

    // Act
    expButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(55.90169943749474);

  });

  it('Should render exp in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;

    // Act
    component.exp();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('3125');

  });
});
//exp-------------------------------------

//sqr-------------------------------------
describe('Ui sqr - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call sqr method', () => {

    // Arrange
    let result = 0;

    // Act
    result = sqr(6);

    // Assert
    expect(result).toBe(36);
  })

  it('Should set operator1 model through ngModel', async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.operator1).toEqual(3.1416);
  });

  it('Should set operator2 model through ngModel', async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.operator2).toEqual(2.71);
  });



  it('should sqr operator1 and operator2 when i click the sqr button ', () => {
    // Arrange
    component.operator1 = 3.0;
    component.operator2 = 2;
    let sqrButton = fixture.debugElement.query(By.css('.sqr-button'));

    // Act
    sqrButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(9);

  });

  it('Should render sqr in result div', () => {
    // Arrange
    component.operator1 = 4;
    component.operator2 = 2;

    // Act
    component.sqr();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('16');

  });
})

//sqr--------------------------------------------------------


//sqrt-------------------------------------------------------
describe('Ui sqrt - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call sqrt method', () => {

    // Arrange
    let result = 0;

    // Act
    result = sqrt(7);

    // Assert
    expect(result).toBe(2.6457513110645907);
  })
  it('Should set operator1 model through ngModel', async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.operator1).toEqual(3.1416);
  });

  it('Should set operator2 model through ngModel', async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.operator2).toEqual(2.71);
  });





  it('should sqrt operator1 and operator2 when i click the sqrt button ', () => {
    // Arrange
    component.operator1 = 5.0;

    let sqrtButton = fixture.debugElement.query(By.css('.sqrt-button'));

    // Act
    sqrtButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(2.23606797749979);

  });

  it('Should render sqrt in result div', () => {
    // Arrange
    component.operator1 = 9;


    // Act
    component.sqrt();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('3');

  });

});
