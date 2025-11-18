import { Type } from "class-transformer";
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsDateString,
  ValidateNested,
} from "class-validator";

export enum ProjectType {
  LANDING = "landing",
  DASHBOARD = "dashboard",
  API = "api",
  MVP = "mvp",
}

export enum Complexity {
  SIMPLE = "simple",
  MEDIUM = "medium",
  COMPLEX = "complex",
}

export enum Timeline {
  RUSH = "rush",
  STANDARD = "standard",
  FLEXIBLE = "flexible",
  EXTENDED = "extended",
  NOT_SURE = "not-sure",
}

export enum BudgetRangeId {
  RANGE_1K_2K = "1000-2000",
  RANGE_2K_5K = "2000-5000",
  RANGE_5K_15K = "5000-15000",
  RANGE_15K_30K = "15000-30000",
  RANGE_30K_PLUS = "30000-plus",
}

export class HireQuoteContactDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsOptional()
  @IsString()
  company?: string;

  @IsOptional()
  @IsString()
  additionalInfo?: string;

  @IsBoolean()
  agreeToTerms!: boolean;
}

export class HireQuoteDto {
  @IsEnum(ProjectType)
  projectType!: ProjectType;

  @IsArray()
  @IsString({ each: true })
  features!: string[];

  @IsEnum(Complexity)
  complexity!: Complexity;

  @IsEnum(Timeline)
  timeline!: Timeline;

  @IsOptional()
  @IsEnum(BudgetRangeId)
  budgetRangeId: BudgetRangeId | null = null;

  @IsBoolean()
  budgetMismatch!: boolean;

  @ValidateNested()
  @Type(() => HireQuoteContactDto)
  contact!: HireQuoteContactDto;

  @IsNumber()
  calculatedPrice!: number;

  @IsOptional()
  @IsDateString()
  estimatedDelivery: string | null = null;
}

export class MailRequestDto {
  @IsString()
  @IsNotEmpty()
  type!: string;

  @ValidateNested()
  @Type(() => HireQuoteDto)
  quote!: HireQuoteDto;
}
