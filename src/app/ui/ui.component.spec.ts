import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from './ui.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
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
    component.operator1 = 2;
    component.operator2 = 2;
    // Act
    component.addition();
    result = component.result;
    // Assert
    expect(result).toBe(4);
  });
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
  it('Should subs 9 - 3 = 6', () => {
    // Arrange
    let result = 0;
    // Act
    result = substraction(9, 3);
    // Assert
    expect(result).toBe(6);
  })
  it('Should subs 3.1416 - 0.1416 = 3.0', () => {
    // Arrange
    let result = 0;
    // Act
    result = substraction(3.1416, 0.1416);
    // Assert
    expect(result).toBe(3.0);
  })
  it('Should subs 2.7 - 0.7 = 2.0', () => {
    // Arrange
    let result = 0;
    // Act
    result = substraction(2.7, 0.7);
    // Assert
    expect(result).toBe(2.0);
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
    it('Should mul 2 * 4 = 8', () => {
      // Pattern AAA (Arrange - Act - Assert)
      // Arrange
      let result = 0;
      // Act
      result = multiplication(2, 4);
      // Assert
      expect(result).toBe(8);
    })
    it(' Should mul 0 * -2 = 0', () => {
      // Arrange
      let result = 0;
      // Act
      result = multiplication(0, -2);
      // Assert
      expect(result).toBe(0);
    })
    it(' Should mul 3.0 * 0.5 = 1.5', () => {
      // Arrange
      let result = 0;
      // Act
      result = multiplication(3.0, 0.5);
      // Assert
      expect(result).toBe(1.5);
    })
    it(' Should mul 2.0 + 1.5 = 3.0', () => {
      // Arrange
      let result = 0;
      // Act
      result = multiplication(2.0, 1.5);
      // Assert
      expect(result).toBe(3.0);
    })
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
})
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

    it('Should divide 2 / 2 = 1', () => {
      // Pattern AAA (Arrange - Act - Assert)

      // Arrange
      let result = 0;

      // Act
      result = division(2, 2);

      // Assert
      expect(result).toBe(1);
    })

    it('Should divide 9 / 2 = 4.5', () => {
      // Arrange
      let result = 0;
      // Act
      result = division(9, 2);
      // Assert
      expect(result).toBe(4.5);
    })

    it('Should divide 3.0 / 0.5 = 6.0', () => {
      // Arrange
      let result = 0;
      // Act
      result = division(3.0, 0.5);
      // Assert
      expect(result).toBe(6.0);
    })

    it(' Should divide 0 / 1 = 0', () => {
      // Arrange
      let result = 0;
      // Act
      result = division(0, 1);
      // Assert
      expect(result).toBe(0);
    })


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
      component.multiplication();
      fixture.detectChanges();

      let de = fixture.debugElement.query(By.css('.result'));
      let el: HTMLElement = de.nativeElement;

      // Assert
      expect(el.innerText).toContain('1');

    });

  });
})
//Division-----------------------------------------